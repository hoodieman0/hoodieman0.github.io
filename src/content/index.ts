export interface JournalPostMeta 
{
    slug: string;
    title: string;
    date: Date;
    details: string;
    image: string;
}

export interface JournalPost {
    meta: JournalPostMeta;
    component: () => Promise<{ default: any }>; // get post content with (await post.component()).default
}

export async function getPosts(): Promise<JournalPost[]>
{
    const posts = import.meta.glob('./journal/*.md')

    return await Promise.all(
        Object.entries(posts).map(async ([path, resolver]) => {
            const slug = path.split('/').pop()!.split('.')[0];
            const post = (await resolver());
            return {
                meta: {
                    slug,
                    title: post.metadata?.title ?? undefined,
                    date: new Date(post.metadata?.date) ?? undefined,
                    details: post.metadata?.details ?? '',
                    image: post.metadata?.image ?? undefined,
                },
                component: () => Promise.resolve({ default: post.default }) 
            };
        }
    ));
}
