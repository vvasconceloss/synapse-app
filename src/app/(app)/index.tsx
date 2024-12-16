import SynapseLogo from "../../assets/synapse-logo.png";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const currentYear = new Date().getFullYear();

  return (
    <>
    <View className="w-full h-full flex-col">
      <View className="flex items-center py-8 bg-blue-500 rounded-b-lg border-b-[0.7rem] border-x-2 border-blue-600">
        <Text className="text-[3.0rem] text-center text-white tracking-wide">Synapse</Text> 
        <Text className="w-96 my-5 text-xl text-center text-white tracking-wider">Measure your abilities with brain games and cognitive tests</Text>
      </View>
      <View className="flex-col items-center justify-center mt-10 p-5">
        <Text className="p-2 text-[3.5rem] text-center text-blue-600 tracking-widest">Welcome</Text>
        <Image source={SynapseLogo} className="w-[20rem] h-[20rem]" />
        <View className="flex-col items-center">
          <TouchableOpacity className="w-64 p-3 mb-5 rounded-full bg-blue-600 border-b-4 border-x-4 border-blue-700">
            <Text className="text-2xl text-center text-white tracking-wide">Login</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-64 p-3 mb-5 rounded-full bg-blue-700 border-b-4 border-x-4 border-blue-800">
            <Text className="text-2xl text-center text-white tracking-wide">Register</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="w-full mt-5">
        <Text className="text-lg text-center text-blue-400">&copy; {currentYear} Synapse</Text>
      </View>  
    </View> 
    </>
  )
}