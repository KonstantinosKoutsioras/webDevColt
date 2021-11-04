const bcrypt = require('bcrypt');

const hashPassword = async (pw) => {
    // const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(pw, 12);
    console.log(hash);
}

const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);
    if (result) console.log('logged in'); else console.log('incorrect');
}

// hashPassword('123456');
login('1234567', "$2b$12$wXnDX5qigbVecf8P7SM9R.165nc1MT.9ag5KMCilyygnz8gx46brC");