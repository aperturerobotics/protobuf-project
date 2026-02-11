//go:build deps_only
// +build deps_only

package template

import (
	// _ imports common with the tools like protoc
	_ "github.com/aperturerobotics/common"
	_ "github.com/aperturerobotics/common/cmd/aptre"
)
