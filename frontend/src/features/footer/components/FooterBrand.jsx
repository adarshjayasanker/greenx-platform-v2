import Text from "../../../components/ui/text/Text";
import AppLogo from "../../navigation/components/appLogo/AppLogo";

const FooterBrand = () => {
    return(
        <div className="space-y-4">
            <AppLogo/>
            <Text className="max-w-sm text-sm leading-6 text-(--color-text-secondary)">
                Professional Pest Control and Bird Netting Solutions committed to creating safer, healthier, and pest-free environments across Kerala
            </Text>
        </div>
    )
};

export default FooterBrand;