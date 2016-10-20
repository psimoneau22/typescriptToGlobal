import { Mod2 } from "./Mod2"

export class Mod3 {
    test(){
        return "im mod3 test" ;
    }
    testMode2From3(){
        return new Mod2().test()
    }
}