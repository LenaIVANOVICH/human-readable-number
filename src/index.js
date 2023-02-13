 module.exports = function toReadable (number) {
    
    let A = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten', 'eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
    let B=['twenty', 'thirty','forty','fifty','sixty', 'seventy', 'eighty','ninety'];

    if (0 <= number && number < 20) return A[number];
    else if (20 < number < 100) return B[number];
}
