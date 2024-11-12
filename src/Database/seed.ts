import { Candidate } from "../types/schemas/CandidateSchema"

export const seedCandidates = async () => {
    try {    
        const DJT = new Candidate ({
            name  : "Donald J. Trump",
            image : "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQLL0VKBxr9IkeP6S-B3zv07-_7-5haUPAUUkc4LB7B2jKO2Phuca09TPJhaJN5iZy8PGoGcXRQPaUPvAg",
            votes : 0,
            color : "red"
        });
        await DJT.save()
        const KDH = new Candidate ({
            name  : "Kamala D. Harris",
            image : "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSe9fn_6Yj_IqI1dmwciR7T1JeY_s1q9DEodQtE70ple82K9kXM6SCNthka-K-GeWdQjCZ2n8N3F6nrsdM",
            votes : 0,
            color : "blue"
        });
        await KDH.save()
        const JES = new Candidate ({
            name  : "Jill E. Stein",
            image : "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2016_11/1463891/160318-jill-stein-green-party-yh-1145a.jpg",
            votes : 0,
            color : "yellow"
        });
        await JES.save()
    } catch(err) {
        console.error((err as Error).message)
    }
}