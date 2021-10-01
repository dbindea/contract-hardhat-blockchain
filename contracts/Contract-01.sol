pragma solidity 0.8.9;

contract Contract01 {
    string public text;

    constructor(string memory text) {
        text = "John 3:16 For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.";
    }

    function setText(string memory _text) public {
        text = _text;
    }
}
