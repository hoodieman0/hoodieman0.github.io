import { getPosts, type JournalPostMeta } from '$content/index'

export const load = async () => {

    let postMeta: JournalPostMeta[] = (await getPosts()).map((postEntry) => {
        return postEntry.meta;
    });
    postMeta = postMeta.sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    ).slice(0, 3);

    return { postMeta };
};
