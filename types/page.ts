import {SbLanguage, SbPageModel} from "@/lib/storyblok/storyblok.types";
import {AlternativeSlugs} from "@/context/localeContext/LocaleContext.types";
import {ParsedUrlQuery} from "querystring";

export type PageProps = {
    story: SbPageModel;
    lang: SbLanguage;
    key: string;
    alternativeSlugs?: AlternativeSlugs;
};

export interface PageParams extends ParsedUrlQuery {
    slug: string[];
    lang: SbLanguage
}
export type PagePaths = {

}