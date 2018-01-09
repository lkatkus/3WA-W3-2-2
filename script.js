let o = {
    p1: "p1",
    p2: true
}

o.p3 = JSON.stringify(o);

let s='{"p1":"test","p2":123}';

let o1 = JSON.parse(s);
