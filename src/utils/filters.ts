import {scoresEnum} from '@/constants/filters';

export function isCountryEqual(user: { country: string }, variant: string | null): boolean {
    return (!variant || user.country === variant);
}

export function isScoreRight(user: { score: number }, variant: string | null): boolean {
    const checkScore = (_variant: string, _score: number) => {
        switch (_variant) {
            case scoresEnum.MORE_THAN_20:
                return _score > 20;
            case scoresEnum.LESS_THAN_10:
                return _score < 10;
            default:
                return false;
        }
    };
    return (!variant || checkScore(variant, user.score));
}