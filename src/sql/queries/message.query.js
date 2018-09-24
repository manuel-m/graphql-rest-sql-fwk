export default function() {
    // asynchronous mock
    return new Promise(resolve => {
        setTimeout(
            () => {
                resolve('this is the message in async mode');
            },
            40 // 40ms
        );
    });
}
