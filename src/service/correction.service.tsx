import api from "./api";

const getMakeCorrection = async (slug: string) => {
    const resp = await api.get(`/journals/${slug}/make-correction`);
    console.log(
        "🚀 ~ file: correction.service.tsx:6 ~ getMakeCorrection ~ resp:",
        resp,
    );
    return resp?.data;
};

const getCorrectionsForPost = async (slug: string) => {
    const resp = await api.get(`/journals/${slug}/corrections`);
    console.log(
        "🚀 ~ file: correction.service.tsx:11 ~ getCorrectionsForPost ~ resp:",
        resp,
    );
    return resp?.data;
};

const CorrectionService = {
    getMakeCorrection,
    getCorrectionsForPost,
};

export default CorrectionService;
