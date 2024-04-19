pragma solidity ^0.8.0;
// SPDX-License-Identifier: UNLICENSED
interface IERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

contract CarbonCreditToken is IERC20 {
    // Token details
    string public name;
    string public symbol;
    uint8 public decimals;

    // Tokenization Engine
    mapping(address => uint256) public carbonCredits; // Mapping of verified carbon credits to token balances
    mapping(address => mapping(address => uint256)) private _allowances;

    uint256 private _totalSupply;

    // Events
    event TokensMinted(address indexed to, uint256 amount);
    event TokensBought(address indexed buyer, uint256 amount);
    event TokensSold(address indexed seller, uint256 amount);

    // Constructor
    constructor(string memory _name, string memory _symbol, uint8 _decimals) {
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
    }

    // Implement ERC20 interface functions
    function totalSupply() external view override returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address account) external view override returns (uint256) {
        return carbonCredits[account];
    }

    function transfer(address recipient, uint256 amount) external override returns (bool) {
        require(recipient != address(0), "ERC20: transfer to the zero address");
        require(carbonCredits[msg.sender] >= amount, "ERC20: transfer amount exceeds balance");

        carbonCredits[msg.sender] -= amount;
        carbonCredits[recipient] += amount;

        emit Transfer(msg.sender, recipient, amount);
        return true;
    }

    function allowance(address owner, address spender) external view override returns (uint256) {
        return _allowances[owner][spender];
    }

    function approve(address spender, uint256 amount) external override returns (bool) {
        _allowances[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }

    function transferFrom(address sender, address recipient, uint256 amount) external override returns (bool) {
        require(sender != address(0), "ERC20: transfer from the zero address");
        require(recipient != address(0), "ERC20: transfer to the zero address");
        require(carbonCredits[sender] >= amount, "ERC20: transfer amount exceeds balance");
        require(_allowances[sender][msg.sender] >= amount, "ERC20: transfer amount exceeds allowance");

        carbonCredits[sender] -= amount;
        carbonCredits[recipient] += amount;
        _allowances[sender][msg.sender] -= amount;

        emit Transfer(sender, recipient, amount);
        return true;
    }

    // Mint new tokens
    function mint(address account, uint256 amount) external {
        require(account != address(0), "ERC20: mint to the zero address");

        _totalSupply += amount;
        carbonCredits[account] += amount;

        emit Transfer(address(0), account, amount);
        emit TokensMinted(account, amount);
    }

    // Buy tokens
    function buyTokens(uint256 _amount) external {
        require(carbonCredits[msg.sender] >= _amount, "ERC20: transfer amount exceeds balance");

        carbonCredits[msg.sender] -= _amount;
        _totalSupply -= _amount;

        emit Transfer(msg.sender, address(0), _amount);
        emit TokensBought(msg.sender, _amount);
    }

    // Sell tokens
    function sellTokens(uint256 _amount) external {
        require(carbonCredits[msg.sender] >= _amount, "ERC20: transfer amount exceeds balance");

        carbonCredits[msg.sender] += _amount;
        _totalSupply += _amount;

        emit Transfer(address(0), msg.sender, _amount);
        emit TokensSold(msg.sender, _amount);
    }
}
