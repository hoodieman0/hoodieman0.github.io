import { getPosts, type JournalPostMeta } from '$content/index'

export const load = async () => {

    const postMeta: JournalPostMeta[] = (await getPosts()).map((postEntry) => {
        return postEntry.meta;
    });
    postMeta.sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return { postMeta };
};
