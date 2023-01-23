module.exports = function toReadable (number) {
    let a = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten', 'eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
    if (0 <= number && number < 20){
        return a[number];
    }
}
