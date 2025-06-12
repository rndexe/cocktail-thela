import { API_URL } from './constants';

export async function getThelaImageList() {
    console.log('getting list')
    try {
        const response = await fetch(`${API_URL}/getThelas`);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

export async function getThelaById(id) {
    try {
        const response = await fetch(`${API_URL}/getThelaById/${id}`);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}
