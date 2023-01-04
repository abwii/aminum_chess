function controle(form1) {
    var test = document.form1.input.value;
    var position = new Coordinates(test)
    var a = position.getOrigin().toUpperCase()
    var b = position.getDestination().toUpperCase()

    var c = document.getElementById(a).innerHTML;
    document.getElementById(a).innerHTML = "";
    document.getElementById(b).innerHTML = c;
}


class Coordinates {
    origin
    destination

    constructor(input) {
        let inputArray = input.split('')
        for (let i = 0; i <= 4; i++) {
            switch (i) {
                case 0:
                    this.origin = inputArray[i] + inputArray[i + 1]
                case 2:
                    this.destination = inputArray[i] + inputArray[i + 1]
            }
        }
    }

    getOrigin() {
        return this.origin
    }
    getDestination() {
        return this.destination
    }
}