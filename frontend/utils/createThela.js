import { useCartStore } from '../store';
import { glass_names, appliances_names } from '../store';
import { navigate } from 'wouter/use-browser-location';
import { toast } from 'sonner';

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

    const file = new File([blob], 'image.png');
    formData.append('image', file);

    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/addThela`, {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            // const result = await response.text();
            // console.log(result);
            toast.success('Your Thela has been shared successfully!', {
                duration: 2000,
            });
        }

        navigate('/');
    } catch (error) {
        console.error('Upload failed:', error);
    }
}
