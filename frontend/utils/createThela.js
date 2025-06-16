import { useCartStore } from '../store';
import { glass_names, appliances_names } from '../store';
import { navigate } from 'wouter/use-browser-location';

export default async function createThela() {
    const state = useCartStore.getState();
    const formData = new FormData();

    const app_record = appliances_names.filter((_, index) => state.appliances[index]).join(', ');
    const glass_record = glass_names.filter((_, index) => state.glasses[index]).join(', ');

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

    const file = new File([blob], 'cart.png', { type: 'image/png' });
    formData.append('image', file);

    await handleShare(file);

    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/addThela`, {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const id = await response.text();
            navigate('/view');
        }
    } catch (error) {
        console.error('Upload failed:', error);
    }
}

const handleShare = async (file) => {
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
            await navigator.share({
                // title: '',
                // text: '',
                files: [file],
            });
        } catch (err) {
            console.warn('Share failed or cancelled:', err);
        }
    } else {
        console.warn('Cannot share file. Falling back...');
        // fallback to download
        const url = URL.createObjectURL(file);
        const a = document.createElement('a');
        a.href = url;
        a.download = `cart.png`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    }
};
