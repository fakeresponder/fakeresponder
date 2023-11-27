const file = Bun.file(`${import.meta.dir}/homepage.txt`);
export const HOMEPAGE = await file.text();
