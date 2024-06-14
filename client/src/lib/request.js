const request = async (method, url, data) => {
    try {
        const response = await fetch(url, { ...buildOptions(data), method });

        const result = await response.json();

        return result;
    } catch (error) {
        console.log(error);
    }
};

const buildOptions = (data) => {
    const options = {};

    if (data) {
        options.body = JSON.stringify(data);
        options.headers = { "Content-Type": "application/json" };
    }

    return options;
};

export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
export const put = request.bind(null, "PUT");
export const remove = request.bind(null, "DELETE");
export const patch = request.bind(null, "PATCH");
