// hooks/useSendMessage.js
import useSWR from 'swr';

const fetcher = (url, body) => fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
}).then(res => res.text());

export const useSendMessage = () => {
    const { data, error, mutate } = useSWR(null, fetcher, { suspense: true, shouldRetryOnError: false });

    const sendMessage = async (apiUrl, newMessage, messages) => {
        const body = {
            "question": newMessage,
            "memory": messages
        };
        await mutate(() => fetcher(apiUrl, body), { optimisticData: 'Sending...', rollbackOnError: true });
        return { data, error };
    };

    return { sendMessage, data, error };
};
