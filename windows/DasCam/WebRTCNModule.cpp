#include "pch.h"
#include "WebRTCNModule.h"
#include <winrt/Windows.Web.Http.h>
#include <winrt/Windows.Foundation.h>
#include <winrt/Microsoft.ReactNative.h>

namespace winrt::DasCam::implementation {

    void WebRTCNModule::FetchOffer(winrt::Microsoft::ReactNative::ReactPromise<winrt::Microsoft::ReactNative::JSValue> promise) noexcept {
        try {
            winrt::Windows::Web::Http::HttpClient client;
            auto response = client.GetAsync(winrt::Windows::Foundation::Uri(L"http://<mobile_ip>:8080/offer")).get();
            auto responseBody = response.Content().ReadAsStringAsync().get();
            promise.Resolve(winrt::Microsoft::ReactNative::JSValue(responseBody.c_str()));
        }
        catch (const std::exception& ex) {
            promise.Reject(ex.what());
        }
    }
}
