package com.sampleapp;

import android.content.Context;
import android.location.Location;
import android.location.LocationManager;
import android.os.Build;
import android.telephony.TelephonyManager;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import org.json.JSONException;
import org.json.JSONObject;

import java.net.NetworkInterface;
import java.net.SocketException;
import java.util.Collections;
import java.util.List;

import static android.content.Context.WIFI_SERVICE;

public class GetPhoneInformationComponent extends ReactContextBaseJavaModule {

    private static ReactApplicationContext reactContext;

    GetPhoneInformationComponent(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }
    private Callback successCallback;
    private Callback failureCallback;
    @ReactMethod
    public void show(final Promise promise) {
        try {
            JSONObject code = this.GetPhoneInformationData();
            promise.resolve(code.toString());
        } catch (final JSONException e) {
            promise.reject("error",e.getMessage());


        }
    }
    private JSONObject GetPhoneInformationData() throws JSONException {
        JSONObject newObj = new JSONObject();
        String _BRAND = android.os.Build.BRAND;
        String _DISPLAY = android.os.Build.DISPLAY;
        String _CPU_ABI = android.os.Build.CPU_ABI;
        String _CPU_ABI2 = android.os.Build.CPU_ABI2;
        String _UNKNOWN = android.os.Build.UNKNOWN;
        String _HARDWARE = android.os.Build.HARDWARE;
        String _ID = android.os.Build.ID;
        String mobile_mac_addres = getMacAddress();  //call the method that return mac address
        int currentVer = android.os.Build.VERSION.SDK_INT;







        newObj.put("deviceId",_ID)
                .put("brand",_BRAND)
                .put("macAddress",mobile_mac_addres)
        .put("os version",currentVer)

        ;
        System.out.println("return data"+ newObj.toString());
        return newObj;
    }

    @NonNull
    @Override
    public String getName() {
         return "GetPhoneInformation";
    }

    /**
     * @return the last know best location
     */

    public String getMacAddress(){
        try{
            List<NetworkInterface> networkInterfaceList = Collections.list(NetworkInterface.getNetworkInterfaces());

            String stringMac = "";

            for(NetworkInterface networkInterface : networkInterfaceList)
            {
                if(networkInterface.getName().equalsIgnoreCase("wlon0"));
                {
                    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.GINGERBREAD) {
                        for(int i = 0 ;i <networkInterface.getHardwareAddress().length; i++){
                            String stringMacByte = Integer.toHexString(networkInterface.getHardwareAddress()[i]& 0xFF);

                            if(stringMacByte.length() == 1)
                            {
                                stringMacByte = "0" +stringMacByte;
                            }

                            stringMac = stringMac + stringMacByte.toUpperCase() + ":";
                        }
                    }
                    break;
                }

            }
            return stringMac;
        }catch (SocketException e)
        {
            e.printStackTrace();
        }

        return  "0";
    }
}


