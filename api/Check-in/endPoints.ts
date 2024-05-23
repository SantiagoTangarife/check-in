const Settings = {
    main: "https://669f3c18-edc5-4bf1-b6a8-726f40806610.mock.pstmn.io/checkin/",
    checkin: "apellido/{0}/codigo/{1}",
    dataContact: "formulario",
    dataQr: "qr/apellido/{0}/codigo/{1}",
};

export function formatApiUrl(...args: (string | number)[]): string {
    if (typeof args[0] !== 'string') {
        throw new Error('The first argument must be a string.');
    }

    let s = args[0];

    for (let i = 0; i < args.length - 1; i++) {
        const placeholder = `{${i}}`;
        // Utiliza un bucle para reemplazar todas las ocurrencias del marcador de posición
        while (s.includes(placeholder)) {
            s = s.replace(placeholder, args[i + 1].toString());
        }
    }

    return s;
}


export function parseApiUrl(endpoint: keyof typeof Settings, ...args: (string | number)[]): string {
    const localEnd = formatApiUrl(Settings[endpoint], ...args);
    return Settings.main + localEnd;
}


