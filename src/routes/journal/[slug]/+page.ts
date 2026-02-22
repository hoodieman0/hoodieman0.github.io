import { error } from '@sveltejs/kit';
import { getPosts } from '$content/index';

export async function load({ params }) {
    const posts = await getPosts();
    const post = posts.find(p => p.meta.slug === params.slug);
    
    if (!post) {
        throw error(404, 'Post not found');
    }

    const module = await post.component();
    return {
        meta: post.meta ?? {},
        content: module.default,
    };
}