
export type FormData = {
    name: string,
    email: string,
    subject: string,
    message: string
}

export type Notification = {
    status: boolean | undefined,
    message: string
}

export type ProjectType = {
    date: string,
    title: string,
    description: string,
    demo: string
}

export type EducationType = {
    date: string,
    description: string,
    title: string,
}