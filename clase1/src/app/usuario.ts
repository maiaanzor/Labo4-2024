export class Usuario {
    protected nombre :any;
    protected clave : any;

    constructor(nombre :string, contrasenia :string)
    {
        this.nombre= nombre;
        this.clave = contrasenia;
    }
}
