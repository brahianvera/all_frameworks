export interface Verb{
    id: number
    times:{
        present:string,
        past: string,
        present_perfec:string
    }
    statments:{
        past: string,
        present: string,
        present_perfec: string
    }
    url: string
}