const defTime = 60 * 60 * 24 * 7; // 7 days

export const setCookie = (name: string, value: string, age = defTime) => {
    document.cookie = `${name}=${value};max-age=${age};path=/`;
};

export const getCookie = (name: string): string | null => {
    const matches = document.cookie.match(new RegExp(
        '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
    ));
    return matches ? decodeURIComponent(matches[1]) : null;
};
