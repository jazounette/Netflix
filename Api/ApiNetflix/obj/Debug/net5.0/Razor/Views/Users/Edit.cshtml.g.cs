#pragma checksum "C:\Users\tory\Documents\Mich\ApiNetflix\ApiNetflix\Views\Users\Edit.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "0795c622db9781a56468d217ba0be8c210665cc8"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Users_Edit), @"mvc.1.0.view", @"/Views/Users/Edit.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"0795c622db9781a56468d217ba0be8c210665cc8", @"/Views/Users/Edit.cshtml")]
    #nullable restore
    public class Views_Users_Edit : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<ApiNetflix.Models.User>
    #nullable disable
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 3 "C:\Users\tory\Documents\Mich\ApiNetflix\ApiNetflix\Views\Users\Edit.cshtml"
  
    ViewData["Title"] = "Edit";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
<h1>Edit</h1>

<h4>User</h4>
<hr />
<div class=""row"">
    <div class=""col-md-4"">
        <form asp-action=""Edit"">
            <div asp-validation-summary=""ModelOnly"" class=""text-danger""></div>
            <div class=""form-group"">
                <label asp-for=""Nom"" class=""control-label""></label>
                <input asp-for=""Nom"" class=""form-control"" />
                <span asp-validation-for=""Nom"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""Prenom"" class=""control-label""></label>
                <input asp-for=""Prenom"" class=""form-control"" />
                <span asp-validation-for=""Prenom"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""Email"" class=""control-label""></label>
                <input asp-for=""Email"" class=""form-control"" />
                <span asp-validation-for=""Email"" class=""text-danger""></span>
            </div>
           ");
            WriteLiteral(@" <div class=""form-group"">
                <label asp-for=""Pass"" class=""control-label""></label>
                <input asp-for=""Pass"" class=""form-control"" />
                <span asp-validation-for=""Pass"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""Token"" class=""control-label""></label>
                <input asp-for=""Token"" class=""form-control"" />
                <span asp-validation-for=""Token"" class=""text-danger""></span>
            </div>
            <input type=""hidden"" asp-for=""Id"" />
            <div class=""form-group"">
                <input type=""submit"" value=""Save"" class=""btn btn-primary"" />
            </div>
        </form>
    </div>
</div>

<div>
    <a asp-action=""Index"">Back to List</a>
</div>

");
            DefineSection("Scripts", async() => {
                WriteLiteral("\r\n");
#nullable restore
#line 53 "C:\Users\tory\Documents\Mich\ApiNetflix\ApiNetflix\Views\Users\Edit.cshtml"
      await Html.RenderPartialAsync("_ValidationScriptsPartial");

#line default
#line hidden
#nullable disable
            }
            );
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<ApiNetflix.Models.User> Html { get; private set; } = default!;
        #nullable disable
    }
}
#pragma warning restore 1591