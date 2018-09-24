export default function() {
    // asynchronous mock
    return new Promise(resolve => {
        setTimeout(
            () => {
                resolve([
                    'Lorem',
                    'ipsum',
                    'dolor',
                    'sit',
                    'amet,',
                    'consectetur',
                    'adipiscing',
                    'elit.',
                    'Phasellus',
                    'vitae',
                    'justo',
                    'sollicitudin,',
                    'tincidunt',
                    'orci',
                    'vel,',
                    'lacinia',
                    'elit'
                ]);
            },
            40 // 40ms
        );
    });
}
