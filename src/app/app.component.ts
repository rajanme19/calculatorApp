import { Component } from "@angular/core";
import { ReturnStatement } from "@angular/compiler";
import { variable } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  // regex: RegExp = new RegExp(/^\d*\.?\d{0,2}$/g);
  title = "calculatormenu";
  data: any[];
  display = "0";
  decimal = "0";
  pValue = "0";
  lastSign = "=";
  lastNumber: number;
  displaySign: string;
  isDecimalCicked: boolean = true;
  isSignClicked: boolean = false;
  sign: string;

  // isPercentClicked:boolean=false;
  cancelClicked() {
    console.log("cancel click");
    this.display = "0";
  }
  cancelAll() {
    console.log("cancel All click");
    this.display = "0";
    this.lastNumber = 0;
    this.sign = "";
  }

  numberClicked(value: any) {
    if (this.isSignClicked) {
      this.display = "0";
    }
    if (this.display.toString() === "0.") {
      this.display = this.display + value.toString();
    } else if (+this.display === 0) {
      this.display = value;
    } else {
      this.display = this.display.toString() + value.toString();
    }
    this.isSignClicked = false;
  }

  signClicked(sign: string) {
    if (this.lastSign === "+") {
      this.display = (this.lastNumber + +this.display).toString();
    } else if (this.lastSign === "-") {
      this.display = (this.lastNumber - +this.display).toString();
    } else if (this.lastSign === "/") {
      this.display = (this.lastNumber / +this.display).toString();
    } else if (this.lastSign === "*") {
      this.display = (this.lastNumber * +this.display).toString();
    } else if (this.lastSign === "%") {
      this.display = ((+this.lastNumber * +this.display) / 100).toString();
    }
    this.lastNumber = +this.display;
    this.lastSign = sign;
    this.isSignClicked = true;
    this.displaySign = this.lastSign;
  }
  decimalClicked() {
    if (this.display.toString().lastIndexOf(".") >= 0) {
      return;
    }
    if (this.isSignClicked) {
      this.display = "0.";
    } else {
      this.display = this.display.toString() + ".";
    }
    this.isSignClicked = false;
  }

  backClick() {
    //  let a = [];
    //     a = this.display.split("", this.display.length);

    //     for (let i : number = 0; i < a.length; i++) {
    //       console.log("push", this.data[i].push(a[i]));
    //       // console.log('splice',this.data.splice(this.data[i],1,0));
    //     }
    //      console.log('dfghjk',this.data.splice(-1));
    const len = this.display.toString().length;

    this.display = this.display.toString().substring(0, len - 1);
  }

  plusminusClicked(){
    
    this.display = (+this.display * (-1)).toString();
  }

}
