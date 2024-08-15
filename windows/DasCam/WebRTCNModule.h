#pragma once

#include "pch.h"
#include "NativeModules.h"
#include <winrt/Microsoft.ReactNative.h>

namespace winrt::DasCam::implementation {
    struct WebRTCNModule : winrt::implements<WebRTCNModule, winrt::Microsoft::ReactNative::IReactModule> {
        WebRTCNModule() = default;

        static constexpr auto Name = L"WebRTCNModule";

        void Initialize(winrt::Microsoft::ReactNative::ReactContext const& reactContext) noexcept {
            m_reactContext = reactContext;
        }

        // Example method to fetch offer from the server
        void FetchOffer(winrt::Microsoft::ReactNative::ReactPromise<winrt::Microsoft::ReactNative::JSValue> promise) noexcept;

    private:
        winrt::Microsoft::ReactNative::ReactContext m_reactContext{ nullptr };
    };
}
