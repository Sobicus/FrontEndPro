"use strict";

class Calculator {
  constructor() {
    this.theNum = "";
    this.oldNum = "";
    this.resultNum;
    this.operator;
  }
  static el = function (element) {
    if (element.charAt(0) === "#") {
      return document.querySelector(element);
    }

    return document.querySelectorAll(element);
  };

  setNum = function (value) {
    if (this.resultNum) {
      this.theNum = value.getAttribute("data-num");

      this.resultNum = "";
    } else {
      this.theNum += value.getAttribute("data-num");
    }
    viewer.innerHTML = this.theNum;
  };

  moveNum = function (value) {
    this.oldNum = this.theNum;
    this.theNum = "";
    this.operator = value.getAttribute("data-ops");

    equals.setAttribute("data-result", "");
  };

  displayNum = function () {
    switch (this.operator) {
      case "plus":
        this.resultNum = parseFloat(this.oldNum) + parseFloat(this.theNum);
        break;

      case "minus":
        this.resultNum = parseFloat(this.oldNum) - parseFloat(this.theNum);
        break;

      case "times":
        this.resultNum = parseFloat(this.oldNum) * parseFloat(this.theNum);
        break;
      case "divided by":
        this.resultNum = parseFloat(this.oldNum) / parseFloat(this.theNum);
        break;

      default:
        this.resultNum = this.theNum;
    }

    if (!isFinite(this.resultNum)) {
      if (isNaN(this.resultNum)) {
        this.resultNum = "You broke it!";
      } else {
        this.resultNum = "Look at what you've done";
        Calculator.el("#calculator").classList.add("broken");
        Calculator.el("#reset").classList.add("show");
      }
    }

    viewer.innerHTML = this.resultNum;
    equals.setAttribute("data-result", this.resultNum);
    this.oldNum = 0;
    this.theNum = this.resultNum;
  };

  clearAll = function () {
    this.oldNum = "";
    this.theNum = "";
    viewer.innerHTML = "0";
    equals.setAttribute("data-result", this.resultNum);
    console.log(this.oldNum);
  };

  startCalc() {
    let nums = Calculator.el(".num");
    let viewer = Calculator.el("#viewer");
    let equals = Calculator.el("#equals");
    let ops = Calculator.el(".ops");

    for (let i = 0, l = nums.length; i < l; i++) {
      nums[i].onclick = this.setNum.bind(this, nums[i]);
    }

    for (let b = 0, l = ops.length; b < l; b++) {
      ops[b].onclick = this.moveNum.bind(this, ops[b]);
    }

    equals.onclick = this.displayNum.bind(this, equals);

    Calculator.el("#clear").onclick = this.clearAll.bind(this);
  }
}

let newCalculator = new Calculator();

newCalculator.startCalc();