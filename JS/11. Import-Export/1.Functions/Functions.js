export const validate = (user, cb) => {
    user.firstName.trim() !== ''
        ? cb(user)
        : console.warn('all users must have a name')
}

export const sendMessage = (text, cb) => {
    console.log('sending message');
    setTimeout(() => {
        let _text = reverseString(text)
        cb(_text)
    }, 2000)
}

function reverseString(_text) {
    let string = _text.split('');
    string = string.reverse();
    string = string.join('')
    return string
}

export const fixName = (name) => {
    return name.trim().charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}