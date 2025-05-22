import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export function readingtime() {
    return function (tree, { data }) {
        const text_on_page = toString(tree);
        const reading_time = getReadingTime(text_on_page);
        data.astro.frontmatter.minutesread = reading_time.text;
    }
}