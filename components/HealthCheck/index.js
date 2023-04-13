import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from "react-native";
import styles from "./styles.js";

const symptomData = [
    { id: "itching", name: "Ngứa" },
    { id: "skin_rash", name: "Nổi mề đay da" },
    { id: "nodal_skin_eruptions", name: "Phát ban nổi mủ" },
    { id: "continuous_sneezing", name: "Hắt hơi liên tục" },
    { id: "shivering", name: "Rùng mình" },
    { id: "chills", name: "Lạnh cóng" },
    { id: "joint_pain", name: "Đau khớp" },
    { id: "stomach_pain", name: "Đau bụng" },
    { id: "acidity", name: "Nóng trong ngực" },
    { id: "ulcers_on_tongue", name: "Loét miệng" },
    { id: "muscle_wasting", name: "Teo cơ" },
    { id: "vomiting", name: "Nôn mửa" },
    { id: "burning_micturition", name: "Tiểu ra máu" },
    { id: "spotting_ urination", name: "Tiểu ra nhiều lần" },
    { id: "fatigue", name: "Mệt mỏi" },
    { id: "weight_gain", name: "Tăng cân" },
    { id: "anxiety", name: "Lo âu" },
    { id: "cold_hands_and_feets", name: "Tay chân lạnh" },
    { id: "mood_swings", name: "Thay đổi tâm trạng" },
    { id: "weight_loss", name: "Giảm cân" },
    { id: "restlessness", name: "Không yên tĩnh" },
    { id: "lethargy", name: "Mệt mỏi, uể oải" },
    { id: "patcheng", name: "Phát ban đỏ" },
    { id: "dehydration", name: "Mất nước" },
    { id: "indigestion", name: "Khó tiêu hóa" },
    { id: "headache", name: "Đau đầu" },
    { id: "yellowish_skin", name: "Da vàng" },
    { id: "dark_urine", name: "Nước tiểu đen" },
    { id: "nausea", name: "Buồn nôn" },
    { id: "loss_of_appetite", name: "Mất cảm giác ngon miệng" },
    { id: "pain_behind_the_eyes", name: "Đau mắt" },
    { id: "back_pain", name: "Đau lưng" },
    { id: "constipation", name: "Táo bón" },
    { id: "abdominal_pain", name: "Đau bụng" },
    { id: "diarrhoea", name: "Tiêu chảy" },
    { id: "mild_fever", name: "Sốt nhẹ" },
    { id: "yellow_urine", name: "Tiểu màu vàng" },
    { id: "yellowing_of_eyes", name: "Vàng da vàng mắt" },
    { id: "acute_liver_failure", name: "Suy gan cấp tính" },
    { id: "fluid_overload", name: "Quá tải dịch" },
    { id: "swelling_of_stomach", name: "Phồng bụng" },
    { id: "swelled_lymph_nodes", name: "Viêm tuyến nước bọt" },
    { id: "malaise", name: "Buồn nôn" },
    {
        id: "blurred_and_distorted_vision",
        name: "Mờ mắt, thị lực bị biến dạng",
    },
    { id: "phlegm", name: "Đờm" },
    { id: "throat_irritation", name: "Viêm họng" },
    { id: "redness_of_eyes", name: "Đỏ mắt" },
    { id: "sinus_pressure", name: "Áp lực xoang mũi" },
    { id: "runny_nose", name: "Sổ mũi" },
    { id: "congestion", name: "Tắc nghẽn" },
    { id: "chest_pain", name: "Đau ngực" },
    { id: "weakness_in_limbs", name: "Yếu cả chi" },
    { id: "fast_heart_rate", name: "Nhịp tim nhanh" },
    { id: "pain_during_bowel_movements", name: "Đau khi đi tiểu" },
    { id: "pain_in_anal_region", name: "Đau vùng hậu môn" },
    { id: "bloody_stool", name: "Phân có máu" },
    { id: "irritation_in_anus", name: "Kích thích vùng hậu môn" },
    { id: "neck_pain", name: "Đau cổ" },
    { id: "dizziness", name: "Chóng mặt" },
    { id: "cramps", name: "Co giật" },
    { id: "bruising", name: "Vết bầm tím" },
    { id: "obesity", name: "Béo phì" },
    { id: "swollen_legs", name: "Phù chân" },
    { id: "swollen_blood_vessels", name: "Tĩnh mạch sưng tấy" },
    { id: "puffy_face_and_eyes", name: "Mặt và mắt sưng phù" },
    { id: "enlarged_thyroid", name: "Căng giãn tuyến giáp" },
    { id: "brittle_nails", name: "Móng tay dễ gãy" },
    { id: "swollen_extremeties", name: "Phù chi" },
    { id: "excessive_hunger", name: "Đói quá mức" },
    { id: "extra_marital_contacts", name: "Liên hệ ngoài luồng" },
    { id: "drying_and_tingling_lips", name: "Khô và tê môi" },
    { id: "slurred_speech", name: "Nói lắp" },
    { id: "knee_pain", name: "Đau đầu gối" },
    { id: "hip_joint_pain", name: "Đau khớp hông" },
    { id: "muscle_weakness", name: "Yếu cơ" },
    { id: "stiff_neck", name: "Cứng cổ" },
    { id: "swelling_joints", name: "Viêm khớp" },
    { id: "movement_stiffness", name: "Cứng khớp khi di chuyển" },
    { id: "spinning_movements", name: "Xoay chuyển không ngừng" },
    { id: "loss_of_balance", name: "Mất thăng bằng" },
    { id: "unsteadiness", name: "Mất ổn định" },
    { id: "weakness_of_one_body_side", name: "Yếu một bên cơ thể" },
    { id: "loss_of_smell", name: "Mất khứu giác" },
    { id: "bladder_discomfort", name: "Khó chịu tiểu buốt" },
    { id: "foul_smell_of urine", name: "Mùi nước tiểu hôi" },
    { id: "continuous_feel_of_urine", name: "Cảm giác tiểu liên tục" },
    { id: "passage_of_gases", name: "Khí tràn ra" },
    { id: "internal_itching", name: "Ngứa bên trong cơ thể" },
    { id: "toxic_look_(typhos)", name: "Tình trạng ngộ độc (Typhos)" },
    { id: "depression", name: "Trầm cảm" },
    { id: "irritability", name: "Dễ cáu" },
    { id: "muscle_pain", name: "Đau cơ" },
    { id: "altered_sensorium", name: "Thay đổi tình trạng nhận thức" },
    { id: "red_spots_over_body", name: "Nổi đỏ trên cơ thể" },
    { id: "belly_pain", name: "Đau bụng" },
    { id: "abnormal_menstruation", name: "Kinh nguyệt bất thường" },
    { id: "dischromic _patches", name: "Đốm da không đều màu" },
    { id: "watering_from_eyes", name: "Chảy nước mắt" },
    { id: "increased_appetite", name: "Tăng cường cảm giác thèm ăn" },
    { id: "polyuria", name: "Tiểu nhiều" },
    { id: "family_history", name: "Tiền sử gia đình" },
    { id: "mucoid_sputum", name: "Đàm dày" },
    { id: "rusty_sputum", name: "Nước bọt có màu sắt" },
    { id: "lack_of_concentration", name: "Thiếu tập trung" },
    { id: "visual_disturbances", name: "Rối loạn thị giác" },
    { id: "receiving_blood_transfusion", name: "Nhận truyền máu" },
    {
        id: "receiving_unsterile_injections",
        name: "Tiêm không trang bị vệ sinh",
    },
    { id: "coma", name: "Hôn mê" },
    { id: "stomach_bleeding", name: "Chảy máu dạ dày" },
    { id: "distention_of_abdomen", name: "Phồng rộp bụng" },
    { id: "history_of_alcohol_consumption", name: "Tiền sử uống rượu" },
    { id: "blood_in_sputum", name: "Máu trong nước bọt" },
    { id: "prominent_veins_on_calf", name: "Tĩnh mạch nổi trên bắp chân" },
    { id: "palpitations", name: "Điều hoà nhịp tim" },
    { id: "painful_walking", name: "Đau khi đi bộ" },
    { id: "pus_filled_pimples", name: "Mụn nhiễm mủ" },
    { id: "blackheads", name: "Mụn đầu đen" },
    { id: "scurring", name: "Vảy" },
    { id: "skin_peeling", name: "Bong da" },
    { id: "silver_like_dusting", name: "Bụi giống bạc" },
    { id: "small_dents_in_nails", name: "Lỗ nhỏ trên móng tay" },
    { id: "inflammatory_nails", name: "Viêm móng tay" },
    { id: "blister", name: "Phồng rộp" },
    { id: "red_sore_around_nose", name: "Vết thương đỏ xung quanh mũi" },
    { id: "yellow_crust_ooze", name: "Dịch mủ có vảy vàng" },
];

export default function HealthCheck({ navigation }) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredData = symptomData.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <View style={styles.HealthCheckContainer}>
            <Text style={styles.Title}>Enter your symtom</Text>
            <TextInput style={styles.EnterSymptom} placeholder="Type somthing here" value={searchTerm} onChangeText={(text) => setSearchTerm(text)} />
            <TouchableOpacity style={styles.DoneGetSymptom} onPress={() => navigation.navigate("healthCheckAnswer")}>
                <Image style={styles.DoneGetSymptomImage} resizeMode="contain" source={require("../../assets/GetSymptom.png")} />
            </TouchableOpacity>
            <View style={styles.FlatListContainer}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={styles.FlatList}
                    data={filteredData}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    numColumns={2}
                />
            </View>
        </View>
    );
}

function renderItem({ item, index }) {
    return (
        <TouchableOpacity style={styles.FlatListProps}>
            <View style={styles.PropsImage}></View>
            <Text style={styles.PropsText}>{item.name}</Text>
        </TouchableOpacity>
    );
}
