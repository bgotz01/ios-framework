export function generateSlug(title: string): string {
    return title
        .toLowerCase()
        .trim()
        // Replace spaces and special characters with hyphens
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        // Remove leading/trailing hyphens
        .replace(/^-+|-+$/g, '');
}

export function ensureUniqueSlug(baseSlug: string, existingSlugs: string[]): string {
    let slug = baseSlug;
    let counter = 1;

    while (existingSlugs.includes(slug)) {
        slug = `${baseSlug}-${counter}`;
        counter++;
    }

    return slug;
}