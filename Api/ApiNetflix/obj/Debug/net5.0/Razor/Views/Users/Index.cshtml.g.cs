#pragma checksum "C:\Users\tory\Documents\Mich\ApiNetflix\ApiNetflix\Views\Users\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "d8b2dd2e66923a52c9fbeeff267e741ac16a129f"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Users_Index), @"mvc.1.0.view", @"/Views/Users/Index.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"d8b2dd2e66923a52c9fbeeff267e741ac16a129f", @"/Views/Users/Index.cshtml")]
    #nullable restore
    public class Views_Users_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<IEnumerable<ApiNetflix.Models.User>>
    #nullable disable
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 3 "C:\Users\tory\Documents\Mich\ApiNetflix\ApiNetflix\Views\Users\Index.cshtml"
  
    ViewData["Title"] = "Index";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<h1>Index</h1>\r\n\r\n<p>\r\n    <a asp-action=\"Create\">Create New</a>\r\n</p>\r\n<table class=\"table\">\r\n    <thead>\r\n        <tr>\r\n            <th>\r\n                ");
#nullable restore
#line 16 "C:\Users\tory\Documents\Mich\ApiNetflix\ApiNetflix\Views\Users\Index.cshtml"
           Write(Html.DisplayNameFor(model => model.Nom));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </th>\r\n            <th>\r\n                ");
#nullable restore
#line 19 "C:\Users\tory\Documents\Mich\ApiNetflix\ApiNetflix\Views\Users\Index.cshtml"
           Write(Html.DisplayNameFor(model => model.Prenom));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </th>\r\n            <th>\r\n                ");
#nullable restore
#line 22 "C:\Users\tory\Documents\Mich\ApiNetflix\ApiNetflix\Views\Users\Index.cshtml"
           Write(Html.DisplayNameFor(model => model.Email));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </th>\r\n            <th>\r\n                ");
#nullable restore
#line 25 "C:\Users\tory\Documents\Mich\ApiNetflix\ApiNetflix\Views\Users\Index.cshtml"
           Write(Html.DisplayNameFor(model => model.Pass));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </th>\r\n            <th>\r\n                ");
#nullable restore
#line 28 "C:\Users\tory\Documents\Mich\ApiNetflix\ApiNetflix\Views\Users\Index.cshtml"
           Write(Html.DisplayNameFor(model => model.Token));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </th>\r\n            <th></th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n");
#nullable restore
#line 34 "C:\Users\tory\Documents\Mich\ApiNetflix\ApiNetflix\Views\Users\Index.cshtml"
 foreach (var item in Model) {

#line default
#line hidden
#nullable disable
            WriteLiteral("        <tr>\r\n            <td>\r\n                ");
#nullable restore
#line 37 "C:\Users\tory\Documents\Mich\ApiNetflix\ApiNetflix\Views\Users\Index.cshtml"
           Write(Html.DisplayFor(modelItem => item.Nom));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </td>\r\n            <td>\r\n                ");
#nullable restore
#line 40 "C:\Users\tory\Documents\Mich\ApiNetflix\ApiNetflix\Views\Users\Index.cshtml"
           Write(Html.DisplayFor(modelItem => item.Prenom));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </td>\r\n            <td>\r\n                ");
#nullable restore
#line 43 "C:\Users\tory\Documents\Mich\ApiNetflix\ApiNetflix\Views\Users\Index.cshtml"
           Write(Html.DisplayFor(modelItem => item.Email));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </td>\r\n            <td>\r\n                ");
#nullable restore
#line 46 "C:\Users\tory\Documents\Mich\ApiNetflix\ApiNetflix\Views\Users\Index.cshtml"
           Write(Html.DisplayFor(modelItem => item.Pass));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </td>\r\n            <td>\r\n                ");
#nullable restore
#line 49 "C:\Users\tory\Documents\Mich\ApiNetflix\ApiNetflix\Views\Users\Index.cshtml"
           Write(Html.DisplayFor(modelItem => item.Token));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </td>\r\n            <td>\r\n                <a asp-action=\"Edit\"");
            BeginWriteAttribute("asp-route-id", " asp-route-id=\"", 1337, "\"", 1360, 1);
#nullable restore
#line 52 "C:\Users\tory\Documents\Mich\ApiNetflix\ApiNetflix\Views\Users\Index.cshtml"
WriteAttributeValue("", 1352, item.Id, 1352, 8, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">Edit</a> |\r\n                <a asp-action=\"Details\"");
            BeginWriteAttribute("asp-route-id", " asp-route-id=\"", 1413, "\"", 1436, 1);
#nullable restore
#line 53 "C:\Users\tory\Documents\Mich\ApiNetflix\ApiNetflix\Views\Users\Index.cshtml"
WriteAttributeValue("", 1428, item.Id, 1428, 8, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">Details</a> |\r\n                <a asp-action=\"Delete\"");
            BeginWriteAttribute("asp-route-id", " asp-route-id=\"", 1491, "\"", 1514, 1);
#nullable restore
#line 54 "C:\Users\tory\Documents\Mich\ApiNetflix\ApiNetflix\Views\Users\Index.cshtml"
WriteAttributeValue("", 1506, item.Id, 1506, 8, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">Delete</a>\r\n            </td>\r\n        </tr>\r\n");
#nullable restore
#line 57 "C:\Users\tory\Documents\Mich\ApiNetflix\ApiNetflix\Views\Users\Index.cshtml"
}

#line default
#line hidden
#nullable disable
            WriteLiteral("    </tbody>\r\n</table>\r\n");
        }
        #pragma warning restore 1998
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<IEnumerable<ApiNetflix.Models.User>> Html { get; private set; } = default!;
        #nullable disable
    }
}
#pragma warning restore 1591
