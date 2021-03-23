for (let i = 0; i <= 3; i++) {
    document.getElementById('next').addEventListener('click', () => {
        document.querySelector('[get_hi]').style.display = 'none';
        document.getElementById(i).style.display = 'block';
        document.getElementById('next').style.display = 'none';
    });
}
console.log('i');