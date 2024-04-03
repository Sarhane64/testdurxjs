interface adresse {
    ville : string,
    rue : string,
    codepostale : number,
}
export interface annonce {
    name : "string",
    prix : number,
    adresse : adresse[]
}
