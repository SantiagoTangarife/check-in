const Settings = {
    main: "https://check--itglobers.myvtex.com/_v/chekin/",
    checkin: "apellido/{0}/codigo/{1}",
};

export function formatApiUrl(...args: (string | number)[]): string {
    let s = args[0].toString();
    for (let i = 0; i < args.length - 1; i += 1) {
        const reg = new RegExp("\\{" + i + "\\}", "gm");
        s = s.replace(reg, args[i + 1].toString());
    }
    return s;
}

export function parseApiUrl(endpoint: keyof typeof Settings, ...args: (string | number)[]): string {
    const localEnd = formatApiUrl(Settings[endpoint], ...args);
    return Settings.main + localEnd;
}


