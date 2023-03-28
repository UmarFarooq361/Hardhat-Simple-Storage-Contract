// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract SimpleStorage {
    uint public number;

    function store(uint _number) public virtual {
        number = _number;
    }

    struct People {
        string name;
        uint numbers;
    }
    mapping(string => uint) public nameTofavNumber;
    People[] public people;

    function addPerson(string memory _name, uint _numbers) public {
        people.push(People(_name, _numbers));
        nameTofavNumber[_name] = _numbers;
    }

    function retrieve() public view returns (uint) {
        return number;
    }
}
