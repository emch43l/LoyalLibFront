export type Book = {
    id: number,
    title: string,
    kind: string,
    url: string,
    language: string,
    epoch: string,
    genre: string,
    author: string,
    translators: Translator[]
    fragment_data: {
        title: string,
        html: string
    },
    pdf: string,
    html: string,
    txt: string,
    xml: string,
    media: Media[],
    cover_color: string,
    simple_cover: string,
    cover: string,
    simple_thumb: string
    isbn_pdf: string,
    isbn_epub: string,
    isbn_mobi: string,
    audio_length: string,
    readByUser: boolean,
}

export type Media = {
    url: string,
    director: string,
    type: string,
    name: string,
    artist: string
}

export type Translator = {
    name: string
}

export type Genre = InfoBase

export type Epoch = InfoBase

export type InfoBase = {
    url: string,
    href: string,
    name: string,
    slug: string
}