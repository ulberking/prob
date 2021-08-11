class Student {
  constructor(s1, s2, s3, s4, s5) {
    this.s1 = s1;
    this.s2 = s2;
    this.s3 = s3;
    this.s4 = s4;
    this.s5 = s5;
  }
  average() {
    var aver = (this.s1 + this.s2 + this.s3 + this.s4 + this.s5) / 5;
    console.log(aver);
  }
}
