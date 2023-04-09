const firebaseConfig = {
    apiKey: "AIzaSyCgP-jZKBVXRUTpdE87E5jmdkE1JtyEnpY",
    authDomain: "l20230409.firebaseapp.com",
    databaseURL: "https://l20230409-default-rtdb.firebaseio.com",
    projectId: "l20230409",
    storageBucket: "l20230409.appspot.com",
    messagingSenderId: "806419526514",
    appId: "1:806419526514:web:0b937aed79b20cb759e3eb"
};

const model = firebase.initializeApp(firebaseConfig, firebaseConfig.appId);

async function write(value, path) {
    try {
        await model.database().ref(path).set(value)
        return true
    } catch (err) {
        return false
    }
}

async function read(path) {
    let snapshot = await model.database().ref(path).get()
    return snapshot.val()
}

function listen(path, callback) {
    model
        .database()
        .ref(path)
        .on('value', (snapshot) => {
            if (typeof callback === 'function') {
                callback(snapshot.val())
            }
        })
}

// ; (async () => {
//     let result = await write('BBB', 'test')
//     console.log(result)

//     let response = await read('test')
//     console.log(response)

//     listen('test', (value) => {
//         console.log(value)
//     })
// })()
