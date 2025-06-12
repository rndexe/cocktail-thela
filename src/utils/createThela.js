import { useCartStore } from '../store';

export default async function createThela() {
    const state = useCartStore.getState();
    const formData = new FormData();

    const appliances = ['dishwasher', 'ice machine', 'solar panel'];
    const glasses = ['rock glasses', 'highball', 'martini'];

    const app_record = appliances.filter((_, index) => state.appliances[index]).join(', ');
    const glass_record = glasses.filter((_, index) => state.glasses[index]).join(', ');

    formData.append('name', state.name);
    formData.append('theme', state.theme);
    formData.append('modules', state.modules);
    formData.append('display', state.display);
    formData.append('top', state.top);
    formData.append('appliances', app_record);
    formData.append('glasses', glass_record);

    const canvas = document.querySelector('canvas');
    const blob = await new Promise((resolve) => {
        canvas.toBlob(resolve, 'image/png');
    });

    const file = new File([blob], 'image.png');
    formData.append('image', file);

    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/addThela`, {
            method: 'POST',
            body: formData,
        });

        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error('Upload failed:', error);
    }
}
