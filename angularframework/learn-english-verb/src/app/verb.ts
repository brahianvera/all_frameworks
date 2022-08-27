export interface Verb{
    id: number
    times:{
        present:string,
        past: string,
        past_part:string
    }
    statments:{
        past: string,
        present: string,
        future: string
    }
    url: string
}