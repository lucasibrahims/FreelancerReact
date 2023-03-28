// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;
contract Davi {
    address private owner;
    uint public counter;

    constructor() {
        owner = msg.sender;
        hasPermission[owner] = true;
    }
    struct Person {
        string name;
        uint256 id;
        uint256 birthMoment;
        address creator;
    }

    mapping(address => bool) public hasPermission;

    Person[] public people;
    modifier onlyOwner() {
        require(owner == msg.sender);
        _;
    }
    function readOwner() public view returns (address) {
        return owner;
    }
    function personAt(uint256 _position) external view returns (Person memory) {
        return people[_position];
    }
    event NewPerson(
        string indexed _name,
        uint256 _id,
        address _owner,
        uint256 indexed _birthMoment
    );


    event PermissionChanged(
        address _account,
        uint256 indexed _moment,
        bool permission
    );

    function switchPermission(address _account) public onlyOwner(){
        hasPermission[_account] = !hasPermission[_account];
        emit PermissionChanged(_account, block.timestamp, hasPermission[_account]);
    }

    function addNewPerson(string calldata _name) public {
        require(hasPermission[msg.sender], "Please, ask for permission!");
        uint256 rightMoment = block.timestamp;
        Person memory p = Person({
            name: _name,
            id: counter,
            birthMoment: rightMoment,
            creator: msg.sender
        });
        people.push(p);
        emit NewPerson(_name, counter, msg.sender, rightMoment);
        counter++;
    }
}
